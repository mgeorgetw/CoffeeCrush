let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Git/coffee_guide
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +106 src/App.css
badd +65 src/DoseCard/index.tsx
badd +129 src/App.tsx
badd +20 src/PreparationCard/index.tsx
badd +12 src/utils/math.tsx
badd +1 term://~/Git/coffee_guide//70526:yarn\ start
badd +11 src/elements/Card.tsx
badd +1 man://display(1)
badd +28 src/elements/Stopwatch/index.tsx
badd +52 src/data/BrewMethods.json
badd +8 src/data/TypeBrewMethod.tsx
badd +196 ~/dotfiles/vim/vimrc
badd +16 src/elements/RadioButton.tsx
badd +1 src/data
badd +33 src/data/BrewMethods_copy.json
badd +1 src/PreparationCard/PreparationCard.module.css
badd +19 src/elements/Stopwatch/Stopwatch.module.css
argglobal
%argdel
edit src/elements/Stopwatch/index.tsx
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 81 + 82) / 164)
exe 'vert 2resize ' . ((&columns * 82 + 82) / 164)
argglobal
balt src/elements/Stopwatch/Stopwatch.module.css
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=7
setlocal fml=1
setlocal fdn=10
setlocal fen
16
normal! zo
19
normal! zo
20
normal! zo
28
normal! zo
28
normal! zo
28
normal! zo
let s:l = 28 - ((17 * winheight(0) + 19) / 39)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 28
normal! 051|
lcd ~/Git/coffee_guide/src/elements/Stopwatch
wincmd w
argglobal
if bufexists("~/Git/coffee_guide/src/elements/Stopwatch/Stopwatch.module.css") | buffer ~/Git/coffee_guide/src/elements/Stopwatch/Stopwatch.module.css | else | edit ~/Git/coffee_guide/src/elements/Stopwatch/Stopwatch.module.css | endif
if &buftype ==# 'terminal'
  silent file ~/Git/coffee_guide/src/elements/Stopwatch/Stopwatch.module.css
endif
balt ~/Git/coffee_guide/src/App.css
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=3
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 18 - ((17 * winheight(0) + 19) / 39)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 18
normal! 0
lcd ~/Git/coffee_guide/src/elements/Stopwatch
wincmd w
exe 'vert 1resize ' . ((&columns * 81 + 82) / 164)
exe 'vert 2resize ' . ((&columns * 82 + 82) / 164)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0&& getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOFc
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
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
