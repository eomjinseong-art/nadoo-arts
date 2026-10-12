import json,urllib.request,urllib.parse,re,time,unicodedata,os,sys
UA={'User-Agent':'nadoo-arts-build/1.0 (educational static site)'}
Q=json.load(open('queries.json'))
picks=json.load(open('picks2.json')) if os.path.exists('picks2.json') else {}
fold=lambda s:unicodedata.normalize('NFKD',s).encode('ascii','ignore').decode().lower()
SPECIAL={"Fra Angelico":"angelico","Artemisia Gentileschi":"gentileschi","Pieter Bruegel the Elder":"bruegel","Hans Holbein the Younger":"holbein","Lucas Cranach the Elder":"cranach","J. M. W. Turner":"turner","Jan van Eyck":"eyck","Anthony van Dyck":"dyck","Henri de Toulouse-Lautrec":"toulouse","Rembrandt van Rijn":"rembrandt","El Greco":"greco","Giovanni Battista Tiepolo":"tiepolo","Wassily Kandinsky":"kandinsk","Vilhelm Hammershøi":"hammersh","Ivan Aivazovsky":"aivazovsk","Ilya Repin":"repin","Isaac Levitan":"levitan","Kazimir Malevich":"malevich","Hieronymus Bosch":"bosch"}
def api(p):
    p.update(format='json')
    for i in range(4):
        try: return json.load(urllib.request.urlopen(urllib.request.Request('https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode(p),headers=UA),timeout=40))
        except Exception as e: time.sleep(5*(i+1))
    return {}
strip=lambda s:re.sub(r'\s+',' ',re.sub('<[^>]+>','',s or '')).strip()
for iid,(q,en) in Q.items():
    if iid in picks: continue
    tok=SPECIAL.get(en, fold(en.split()[-1]))
    d=api(dict(action='query',generator='search',gsrsearch='filetype:bitmap '+q,gsrnamespace=6,gsrlimit=10,prop='imageinfo',iiprop='url|extmetadata|size',iiurlwidth=900))
    pages=sorted(d.get('query',{}).get('pages',{}).values(),key=lambda p:p['index'])
    pick=None
    for p in pages:
        ii=p['imageinfo'][0];m=ii.get('extmetadata',{})
        lic=m.get('LicenseShortName',{}).get('value','')
        art=fold(strip(m.get('Artist',{}).get('value',''))+' '+p['title'])
        if re.search(r'public domain|^PD|CC0',lic,re.I) and ii['width']>=500 and tok in art and not re.search(r'detail|crop|frame',p['title'],re.I):
            pick=dict(title=p['title'],thumb=ii['thumburl'],page=ii['descriptionurl'],license=lic,artist=strip(m.get('Artist',{}).get('value',''))[:120]);break
    if pick: picks[iid]=pick; print(iid,'|',pick['title'],'|',pick['license'])
    else: print('NONE',iid,[p['title'] for p in pages][:4])
    json.dump(picks,open('picks2.json','w'),ensure_ascii=False,indent=1)
    time.sleep(0.4)
