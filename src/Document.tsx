import { Body, Head, Html, Root } from '@modern-js/runtime/document';
import type React from 'react';
import { useContext } from 'react';

export default function Document(): React.ReactElement {
  return (
    <Html>
      <Head>
        <title>Origin Title</title>
        <meta content="origin" name="name" />
      </Head>
      <Body>
        <Root rootId="root" />
      </Body>
    </Html>
  );
}
