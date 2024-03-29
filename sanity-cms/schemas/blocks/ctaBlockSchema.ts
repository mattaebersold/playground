import { TfiLayoutCtaCenter } from 'react-icons/tfi'
import { CtaBlockType } from '~/types'
import { createListOptionsFromEnum, makeBlockSchema } from '~/sanity/lib/schema'

export const ctaBlockSchema = makeBlockSchema({
  name: 'ctaBlock',
  title: 'CTA Block',
  icon: TfiLayoutCtaCenter,
  hasBackground: true,
  contentFields: [

    {
      name: 'type',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: CtaBlockType.SimpleCentered,
      options: {
        list: createListOptionsFromEnum(CtaBlockType, {
          [CtaBlockType.SimpleCentered]: 'Simple - Centered',
          [CtaBlockType.SimpleJustified]: 'Simple - Justified',
        }),
        layout: 'radio'
      }
    },

    {
      name: 'body',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'buttonList' },
      ],
    },

    {
      name: 'buttons',
      type: 'array',
      of: [
        { type: 'button' },
      ]
    }

  ]
})
