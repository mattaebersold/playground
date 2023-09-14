import type { StructureResolver } from 'sanity/desk'
import { CogIcon } from '@sanity/icons'
import { getViews } from "~/config/views";

export const structure: StructureResolver = (S, context) => {
  return S.list().title('Content').items([

    // Towers
    S.documentTypeListItem('tower').title('Towers'),

    // Settings
    S.divider(),
    S.listItem().title('Settings').icon(CogIcon).child(
      S.document().schemaType('settings')
    ),

  ])
}

// These are document type that can be previewed.
const previewDocs = ['tower'];

export const defaultDocumentNode = (S: any, {schemaType}: any) => {
  const views = getViews(S);
  if (previewDocs.includes(schemaType)) {
    return S.document().views(views);
  }

  return S.document();
};
