# damondmc.github.io

Personal website of Damon Cheung, served by GitHub Pages at https://damondmc.github.io/

Based on the MIT-licensed [vCard personal portfolio](https://github.com/codewithsadee/vcard-personal-portfolio)
template by codewithsadee (see LICENSE).

## Preview locally

```
python3 -m http.server 8000
```

Open http://127.0.0.1:8000. The CW Signal Simulator page (`cwsky.html`) embeds the
simulator from http://127.0.0.1:8001 when previewing locally, so also run

```
python3 -m http.server 8001 --directory ../cwsky/docs
```

When published, it embeds https://damondmc.github.io/cwsky/ instead.
