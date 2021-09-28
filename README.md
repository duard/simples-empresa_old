# SimplesEmpresa

## rodar o projeto

```
npx nx run-many --target=serve --projects=roma-app,roma-api --parallel=true
```

Try graphql on your [API](http://localhost:3000/graphql)

```
{
  status {
    app,
    system
  },
  uptime
}
```

This project was generated using [Nx](https://nx.dev).

## configurations

### git and commits

```
    npm i --save-dev husky @commitlint/config-conventional @commitlint/cli
    echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
    npm install --save-dev prettier pretty-quick
```

[Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

[Structure project](https://gist.github.com/trungk18/7ef8766cafc05bc8fd87be22de6c5b12)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
