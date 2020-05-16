let SessionLoad = 1
if &cp | set nocp | endif
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Documents/Github/FullStackWebDevelopmentCourse/079-SassAdvanced
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
argglobal
%argdel
set lines=45 columns=192
edit index.html
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 96 + 96) / 192)
exe 'vert 2resize ' . ((&columns * 95 + 96) / 192)
argglobal
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
3
normal! zo
10
normal! zo
32
normal! zo
let s:l = 39 - ((20 * winheight(0) + 20) / 41)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
39
normal! 020|
wincmd w
argglobal
if bufexists("~/Documents/Github/FullStackWebDevelopmentCourse/079-SassAdvanced/SASS/modules/_alerts.scss") | buffer ~/Documents/Github/FullStackWebDevelopmentCourse/079-SassAdvanced/SASS/modules/_alerts.scss | else | edit ~/Documents/Github/FullStackWebDevelopmentCourse/079-SassAdvanced/SASS/modules/_alerts.scss | endif
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 22 - ((21 * winheight(0) + 20) / 41)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
22
normal! 0
wincmd w
2wincmd w
exe 'vert 1resize ' . ((&columns * 96 + 96) / 192)
exe 'vert 2resize ' . ((&columns * 95 + 96) / 192)
tabnext 1
badd +1 index.html
badd +1 ~/Documents/Github/FullStackWebDevelopmentCourse/079-SassAdvanced/SASS/modules/_alerts.scss
badd +8 SASS/_variables.scss
badd +1 SASS/layouts/_sections.scss
badd +1 SASS/base/_base-dir.scss
badd +1 SASS/base/_base.scss
badd +1 SASS/layouts/_footer.scss
badd +1 SASS/layouts/_header.scss
badd +1 SASS/layouts/_layouts-dir.scss
badd +1 SASS/modules/_button.scss
badd +4 SASS/modules/_modules-dir.scss
badd +1 SASS/modules/_navbar.scss
badd +3 SASS/modules/_pro-img.scss
badd +1 SASS/states/_states-dir.scss
badd +1 SASS/_mixins.scss
badd +3 SASS/app.scss
badd +1 SASS/_extends.scss
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOc
set winminheight=1 winminwidth=1
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
nohlsearch
let g:this_session = v:this_session
let g:this_obsession = v:this_session
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
