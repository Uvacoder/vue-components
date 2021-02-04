<template>
  <div class="markdown" v-html="markdown"></div>
</template>

<script>
import Prism from 'prismjs'

export default {
  props: {
    markdown: {
      type: String,
    },
  },
  mounted() {
    setTimeout(Prism.highlightAll)
  },
}
</script>

<style lang="scss">
@import '@/styles/bootstrap-required';
@import '~prism-themes/themes/prism-duotone-space.css';

@mixin at-root {
  @at-root {
    .markdown {
      @content;
    }
  }
}

@include at-root {
  pre[class*='language-'] {
    margin-top: 0;
    margin-bottom: 2em;

    code {
      white-space: pre-wrap;
    }
  }

  .code-toolbar {
    margin-bottom: 2em;

    pre[class*='language-'] {
      margin-bottom: 0;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    line-height: 2;
    font-size: 1em;
    color: #767693;
    // https://www.colorhexa.com/1c284c
    // https://www.colorhexa.com/0c1121
    background: #0c1121;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    padding-top: 1em;
    padding-bottom: 1em;
  }

  /* show-language/copy-to-clipboard */
  .code-toolbar {
    position: relative;
  }

  // .toolbar { }

  /* show-language */
  .toolbar-item:nth-child(1) {
    top: 0;
    right: 0;
    position: absolute;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    cursor: default;
    color: #666666;
    font-size: 0.6em;
    font-weight: bold;
    text-transform: uppercase;
    transition: color var(--common-transition-time);
  }

  /* copy-to-clipboard */
  .toolbar-item:nth-child(2) {
    right: 0;
    bottom: 0;
    opacity: 0;
    position: absolute;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    transition: opacity var(--common-transition-time);

    @include at-root {
      .code-toolbar:hover {
        .toolbar-item:nth-child(2) {
          opacity: 1;
        }
      }
    }

    button {
      padding: 0;
      display: block;
      border-width: 0;
      font-size: 0.6em;
      font-weight: 700;
      color: white;
      text-transform: uppercase;
      background-color: transparent;
      transition: background-color var(--common-transition-time),
        padding var(--common-transition-time);
    }
  }

  blockquote {
    margin: 0;

    p {
      padding-left: 1em;
      border-left: 0.125em solid #8b9dc3;

      img {
        display: block;
      }
    }
  }

  a {
    code {
      color: inherit;
      transition: inherit;

      &:hover {
        color: inherit;
      }
    }
  }

  code {
    color: #fe8c52;
  }

  h1 {
    color: #8b9dc3;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    a {
      position: relative;

      &::before {
        content: '⚡️ ';
        left: 0;
        opacity: 0.5;
        position: absolute;
        transform: translateX(calc(-100% - 0.25ch));
        transition: opacity var(--common-transition-time);
      }

      &:hover::before {
        opacity: 1;
      }
    }
  }

  .table {
    margin-bottom: 1.5em;

    table {
      margin-bottom: 0;
    }

    @include media-breakpoint-down(md) {
      overflow-x: scroll;

      table {
        width: 200%;
      }
    }

    th:nth-child(1) {
      width: 20%;
    }
  }

  .table-cols-3 {
    th {
      &:nth-child(2),
      &:nth-child(3) {
        width: 40%;
      }
    }
  }

  .table-cols-4 {
    th {
      &:nth-child(2) {
        width: 20%;
      }

      &:nth-child(3),
      &:nth-child(4) {
        width: 30%;
      }
    }
  }

  table {
    width: 100%;
    color: #2f4480;
    margin-bottom: 1.5em;
    background-color: rgba(#f5f2f0, 0.9);

    code {
      color: #2f4480;
    }
  }

  th {
    font-weight: bold;
    vertical-align: middle;
    background-color: rgba(#8b9dc3, 0.9);
  }

  td {
    vertical-align: top;
    border-top: 1px solid;

    &:first-child {
      background-color: rgba(lighten(#8b9dc3, 20%), 0.9);
    }
  }

  th,
  td {
    padding: 1em;
    border-right: 1px solid;

    a {
      code {
        padding: 0;
        background-color: transparent;
      }
    }
  }
}
</style>
