import React from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
const { INLINES, BLOCKS, MARKS } = require('@contentful/rich-text-types');

const options = {
	renderNode: {
		[BLOCKS.PARAGRAPH]: (node, next) => `<p class='spectrum-Body3'>${next(node.content)}</p>`,
		[INLINES.HYPERLINK]: (node, next) => {
			return `<a class='spectrum-Link' href="${node.data.uri}">${next(node.content)}</a>`;
		},
		[INLINES.ENTRY_HYPERLINK]: (node, next) => {
			// TODO figure out how to use gatsby link
			return `<a class='spectrum-Link' href=''>${next(node.content)}</a>`;
		}
	}
};

class RichTextRenderer extends React.Component {
	render() {
		const { content } = this.props;
		const JSONContent = JSON.parse(content);
		const article = documentToHtmlString(JSONContent, options);
		return <div dangerouslySetInnerHTML={{ __html: article }} />;
	}
}

RichTextRenderer.propTypes = {};

export default RichTextRenderer;
