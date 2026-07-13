## Subresource Integrity

If you are loading Highlight.js via CDN you may wish to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to guarantee that you are using a legimitate build of the library.

To do this you simply need to add the `integrity` attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.

```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"
  integrity="sha384-5xdYoZ0Lt6Jw8GFfRP91J0jaOVUq7DGI1J5wIyNi0D+eHVdfUwHR4gW6kPsw489E"></script>
<!-- including any other grammars you might need to load -->
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/languages/go.min.js"
  integrity="sha384-HdearVH8cyfzwBIQOjL/6dSEmZxQ5rJRezN7spps8E7iu+R6utS8c2ab0AgBNFfH"></script>
```

The full list of digests for every file can be found below.

### Digests

```
sha384-82eHXc3kQTsEJ65AcO2c8eVqB9ynJzosSiMwdPYwt5oNRVsMKuxWoWkO5KFekVYB /es/languages/wasm.js
sha384-YBbT3eXpwj5Ddx0MS774iycYICw4gZ1Rs1ExYGIdcYC4EJhaWsfd9uNlaJZBuDaa /es/languages/wasm.min.js
sha384-TCN/hvup/XKpDtGmR/RyK6NSG247wkNROUpO2sAoJuwpMvcr4KP9HA+K5L2rvOKg /languages/wasm.js
sha384-J3pUKFGnHJH0czAle+lKF96F/08caYKJfTEzlt5dGbGTR9M4BwOeOqAgvSzsjOsP /languages/wasm.min.js
sha384-AmWLfdX8F8sEETPouSGXf6aQcpA6obCmMNJM1YGi8XJFrLyn3FJ+ePRPbOahMfCa /highlight.js
sha384-ZrGPQbJ5NNqvRCLK6RGZazX1e8JZ6Su3wNp6EOXTilfOFcAlA3yfvsjwTARlLMTN /highlight.min.js
```

