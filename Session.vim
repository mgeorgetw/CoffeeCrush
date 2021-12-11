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
argglobal
%argdel
edit src/views/InstructinView/DonutProgressChart/DonutProgressContainer.jsx
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
balt src/views/InstructinView/DonutProgressChart/DonutChart.jsx
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=8
setlocal fml=1
setlocal fdn=10
setlocal fen
24
normal! zo
26
normal! zo
27
normal! zo
29
normal! zo
30
normal! zo
38
normal! zo
46
normal! zo
let s:l = 74 - ((28 * winheight(0) + 19) / 39)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 74
normal! 027|
lcd ~/Git/coffee_guide/src/views/InstructinView
wincmd w
argglobal
if bufexists("~/Git/coffee_guide/src/views/InstructinView/DonutProgressChart/DonutProgress.module.css") | buffer ~/Git/coffee_guide/src/views/InstructinView/DonutProgressChart/DonutProgress.module.css | else | edit ~/Git/coffee_guide/src/views/InstructinView/DonutProgressChart/DonutProgress.module.css | endif
if &buftype ==# 'terminal'
  silent file ~/Git/coffee_guide/src/views/InstructinView/DonutProgressChart/DonutProgress.module.css
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
let s:l = 20 - ((19 * winheight(0) + 19) / 39)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 20
normal! 0
lcd ~/Git/coffee_guide/src/views/InstructinView
wincmd w
exe 'vert 1resize ' . ((&columns * 81 + 82) / 164)
exe 'vert 2resize ' . ((&columns * 82 + 82) / 164)
tabnext 1
badd +62 ~/Git/coffee_guide/src/views/InstructinView/DonutProgressChart/DonutProgressContainer.jsx
badd +25 ~/Git/coffee_guide/src/views/InstructinView/DonutProgressChart/DonutProgress.module.css
badd +87 ~/Git/coffee_guide/src/App.css
badd +45 ~/Git/coffee_guide/src/App.tsx
badd +19 term://yarn\ start
badd +26 ~/Git/coffee_guide/src/views/InstructinView/DonutProgressChart/index.tsx
badd +16 ~/Git/coffee_guide/src/views/InstructinView/Stopwatch/index.tsx
badd +27 ~/Git/coffee_guide/src/views/InstructinView/Stopwatch/Stopwatch.module.css
badd +4 ~/Git/coffee_guide/src/views/InstructinView/DonutProgressChart/DonutChart.jsx
badd +29 ~/Git/coffee_guide/src/elements/RadioButton/RadioButton.module.css
badd +195 ~/dotfiles/vim/vimrc
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
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
