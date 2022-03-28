## Why use babel?

There are multiple ways to start using React.js library. Although, the most convenient one is by using Babel+Webpack (Webpack is a popular module bundling system built on top of NodeJS).

React uses JSX syntax. Babel is a transpiler i.e. it converts the JSX to vanilla JavaScript. You can view babel as an intermediate step between your code and "executable" code.

React also uses ES6, which is not supported by most of the browsers. Babel converts the ES6 code to a code which is compatible with the browsers.

The best combination for a mature React project would be React+babel+Webpack. In order to run babel and webpack, you'll need node.

## Home

HomepageFeaturedContent component need at least one HomepageFeaturedItem otherwise it won't render

## Strucutre

```js
const parseMdx = (file) => {
  let { data, content } = matter(readFileSync(file, "utf8"));
  // do whatever with data
  return { content, patrons, ...data };
};
const serializeMdx = async ({ content, ...rest }) => {
  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex, rehypeSlug, rehypeHighlight],
    },
  });
  return { ...rest, content, source };
};
// use these two function like
const props = await serializeMdx(parseMdx(file));
```

```js
<Portrait image="" size="250px" flip={true}/>
<Clickable
  link="https://www.joshuapullen.com/"
  icon="fas fa-home"
  text="Josh's Website"
/>
<Clickable
  link="https://youtube.com/vcubingx"
  icon="fab fa-youtube"
  text="Vivek's YouTube"
/>
<Clickable
  link="https://twitter.com/vcubingx"
  icon="fab fa-twitter"
  text="Vivek's Twitter"
/>
<Clickable
  link="https://github.com/vivek3141"
  icon="fab fa-github"
  text="Vivek's GitHub"
/>
```
