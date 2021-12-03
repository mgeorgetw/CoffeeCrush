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
badd +20 ~/Git/coffee_guide/src/App.css
badd +16 ~/Git/coffee_guide/tsconfig.json
badd +3 ~/Git/coffee_guide/src/DoseCard/index.tsx
badd +43 ~/Git/coffee_guide/src/App.tsx
badd +22 BrewMethods.json
badd +5 term://~/Git/coffee_guide/src//16333:/usr/local/bin/fish
badd +26 ~/Git/coffee_guide/src/PreparationCard/index.tsx
badd +9 TypeBrewMethod.tsx
badd +1 ~/Git/coffee_guide/src/data
badd +12 ~/Git/coffee_guide/src/utils/math.tsx
badd +5 ~/Git/coffee_guide/src/utils/pourStepsGenerator.tsx
argglobal
%argdel
edit ~/Git/coffee_guide/src/App.tsx
argglobal
balt ~/Git/coffee_guide/src/App.css
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=3
setlocal fml=1
setlocal fdn=10
setlocal fen
27
normal! zo
38
normal! zo
46
normal! zo
49
normal! zo
52
normal! zo
86
normal! zo
108
normal! zo
112
normal! zo
let s:l = 84 - ((18 * winheight(0) + 23) / 46)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 84
normal! 045|
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
