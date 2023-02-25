// constants for your GraphQL Post and Author types
const POST_NODE_TYPE = `Post`

exports.sourceNodes = async ({ actions, createContentDigest, createNodeId }) => {
  const { createNode } = actions

  const kebabCase = (str) => {
    return str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .join("-")
      .toLowerCase()
  }

  const data = {
    posts: [
      {
        id: 00,
        title: `CACHARREO Foto-utopische SERIE`,
        year: `2022`,
        thumbnailPath: `thumbnail00.jpg`,
        images: [
          `image00.jpg`,
          `image01.jpg`,
          `image02.jpg`,
          `image03.jpg`,
          `image04.jpg`,
          `image05.jpg`,
        ],
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin nibh. Nunc sed augue lacus viverra vitae congue eu. Velit ut tortor pretium viverra suspendisse potenti nullam ac. Sit amet mattis vulputate enim nulla. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Vulputate dignissim suspendisse in est. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Malesuada pellentesque elit eget gravida cum sociis natoque. Faucibus nisl tincidunt eget nullam. Id leo in vitae turpis. Mauris nunc congue nisi vitae suscipit tellus mauris. Nibh venenatis cras sed felis eget velit aliquet. Quis hendrerit dolor magna eget est lorem ipsum dolor. Netus et malesuada fames ac turpis egestas integer eget. Magna fringilla urna porttitor rhoncus dolor purus non enim.

        Donec adipiscing tristique risus nec feugiat in. Eu consequat ac felis donec et odio pellentesque. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Ut ornare lectus sit amet est. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Urna et pharetra pharetra massa massa ultricies mi quis. Massa eget egestas purus viverra accumsan in nisl. Mauris vitae ultricies leo integer malesuada. Adipiscing bibendum est ultricies integer quis auctor elit. Sed lectus vestibulum mattis ullamcorper velit sed. In eu mi bibendum neque. Sed libero enim sed faucibus turpis in. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Justo nec ultrices dui sapien eget mi proin. Ac ut consequat semper viverra nam. Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis.`,
        eventTitle: `WHAT THE FEM`,
      },
      {
        id: 01,
        title: `Die Zukunft ist passé
        Gmunden `,
        year: `2022`,
        thumbnailPath: `thumbnail01.jpg`,
        images: [
          `image00.jpg`,
          `image01.jpg`,
          `image02.jpg`,
          `image03.jpg`,
          `image04.jpg`,
          `image05.jpg`,
        ],
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin nibh. Nunc sed augue lacus viverra vitae congue eu. Velit ut tortor pretium viverra suspendisse potenti nullam ac. Sit amet mattis vulputate enim nulla. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Vulputate dignissim suspendisse in est. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Malesuada pellentesque elit eget gravida cum sociis natoque. Faucibus nisl tincidunt eget nullam. Id leo in vitae turpis. Mauris nunc congue nisi vitae suscipit tellus mauris. Nibh venenatis cras sed felis eget velit aliquet. Quis hendrerit dolor magna eget est lorem ipsum dolor. Netus et malesuada fames ac turpis egestas integer eget. Magna fringilla urna porttitor rhoncus dolor purus non enim.

        Donec adipiscing tristique risus nec feugiat in. Eu consequat ac felis donec et odio pellentesque. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Ut ornare lectus sit amet est. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Urna et pharetra pharetra massa massa ultricies mi quis. Massa eget egestas purus viverra accumsan in nisl. Mauris vitae ultricies leo integer malesuada. Adipiscing bibendum est ultricies integer quis auctor elit. Sed lectus vestibulum mattis ullamcorper velit sed. In eu mi bibendum neque. Sed libero enim sed faucibus turpis in. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Justo nec ultrices dui sapien eget mi proin. Ac ut consequat semper viverra nam. Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis.`,
        eventTitle: `WHAT THE FEM`,
      },
      {
        id: 02,
        title: `CACHARREO in -Vorchdorf-
        Die Zukunft ist passé`,
        year: `2022`,
        thumbnailPath: `thumbnail02.jpg`,
        images: [
          `image00.jpg`,
          `image01.jpg`,
          `image02.jpg`,
          `image03.jpg`,
          `image04.jpg`,
          `image05.jpg`,
        ],
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin nibh. Nunc sed augue lacus viverra vitae congue eu. Velit ut tortor pretium viverra suspendisse potenti nullam ac. Sit amet mattis vulputate enim nulla. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Vulputate dignissim suspendisse in est. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Malesuada pellentesque elit eget gravida cum sociis natoque. Faucibus nisl tincidunt eget nullam. Id leo in vitae turpis. Mauris nunc congue nisi vitae suscipit tellus mauris. Nibh venenatis cras sed felis eget velit aliquet. Quis hendrerit dolor magna eget est lorem ipsum dolor. Netus et malesuada fames ac turpis egestas integer eget. Magna fringilla urna porttitor rhoncus dolor purus non enim.

        Donec adipiscing tristique risus nec feugiat in. Eu consequat ac felis donec et odio pellentesque. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Ut ornare lectus sit amet est. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Urna et pharetra pharetra massa massa ultricies mi quis. Massa eget egestas purus viverra accumsan in nisl. Mauris vitae ultricies leo integer malesuada. Adipiscing bibendum est ultricies integer quis auctor elit. Sed lectus vestibulum mattis ullamcorper velit sed. In eu mi bibendum neque. Sed libero enim sed faucibus turpis in. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Justo nec ultrices dui sapien eget mi proin. Ac ut consequat semper viverra nam. Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis.`,
        eventTitle: `WHAT THE FEM`,
      },
    ],
  }

  // loop through data and create Gatsby nodes
  data.posts.forEach((post) =>
    createNode({
      ...post,
      id: createNodeId(`${POST_NODE_TYPE}-${post.id}`),
      slug: kebabCase(post.title),
      parent: null,
      children: [],
      internal: {
        type: POST_NODE_TYPE,
        contentDigest: createContentDigest(post),
      },
    }),
  )

  return
}

// https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/creating-a-source-plugin/#source-data-and-create-nodes
