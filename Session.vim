let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Git/coffee_guide/src/data
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +22 ~/Git/coffee_guide/src/App.css
badd +1 ~/Git/coffee_guide/src/DoseCard/index.tsx
badd +5 ~/Git/coffee_guide/src/App.tsx
badd +1 BrewMethods.json
badd +1 ~/Git/coffee_guide/src/PreparationCard/index.tsx
badd +12 ~/Git/coffee_guide/src/utils/math.tsx
badd +5 ~/Git/coffee_guide/src/utils/pourStepsGenerator.tsx
badd +4 term://~/Git/coffee_guide/src//68977:/usr/local/bin/fish
badd +1 ~/Git/coffee_guide/src/elements/Stopwatch/index.tsx
argglobal
%argdel
edit ~/Git/coffee_guide/src/App.tsx
argglobal
balt ~/Git/coffee_guide/src/elements/Stopwatch/index.tsx
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=7
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 13 - ((12 * winheight(0) + 23) / 47)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 13
normal! 072|
lcd ~/Git/coffee_guide/src
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0&& getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOFc
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
let g:this_session = v:this_session
let g:this_obsession = v:this_session
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
