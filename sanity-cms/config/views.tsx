import React from "react";
import {getPreviewUrl} from "~/config/preview";
import {MdEdit,MdVisibility} from "react-icons/md";

export const getViews = (S: any) => {
  return [
    S.view
      .form()
      .icon(MdEdit),
    S.view
      .component(WebPreview)
      .title('Web Preview')
      .icon(MdVisibility),
  ];
};

const WebPreview = ({document}: any): React.ReactElement => {
  const {displayed} = document
  const slug = displayed.uri?.current

  if (!slug) {
    return <h1>Please set a slug to see a preview</h1>
  }

  const url = getPreviewUrl(slug)

  return <iframe src={url} frameBorder={0} width="100%" height="100%"/>;
}
