import {
  BackgroundColor,
  Block,
  BlockSpacing,
  BlockPadding,
  BlockBackground,
  HideWhen,
} from '../../../sanity-cms/types'
import { mapOption, mapOptions } from '../../lib/helpers'

// Apply common layout options to block
export default {
  functional: true,

  props: {

    // Sanity common configuration
    hideWhen: Array,
    backgroundColor: String,
    blockSpacing: String,
    paddingTop: String,
    paddingBottom: String,

    // Block order context
    index: Number,
  },

  render(create, { props, children }) {

    // Expect 1 child
    if (children.length != 1) {
      console.error(`BlockParent children.length is ${children.length}`)
      return
    }
    const child = children[0]

    // Add css clases to the child
    if (!child.data) child.data = {}
    child.data.class = [

      // Hide at different viewports
      mapOptions(props.hideWhen, {
        [HideWhen.Mobile]: 'when-mobile:hidden',
        [HideWhen.Tablet]: 'when-tablet:hidden',
        [HideWhen.Desktop]: 'when-desktop:hidden',
      }),

      // Apply margin top between blocks
      // mapBlockSpacingToTailwindClass(props, blockOrder.previous),

      mapOption(props.backgroundColor, {
        [BackgroundColor.Dark]: 'bg-indigo-700 text-white',
      }),

      // Set padding within block, like if there is a background
      // mapPaddingTopToTailwindClass(block, blockOrder.previous),
      // mapPaddingBottomToTailwindClass(block, blockOrder.next),
    ]

    // Return the modified chilc block
    return child
  }
}

// Map props to tailwind classes. This must return a full class name:
// https://tailwindcss.com/docs/customizing-spacing
// https://stackoverflow.com/a/74959709/59160

// Adds spacing between previous block
function mapBlockSpacingToTailwindClass(
  block: Block,
  previousBlock: Block,
): string | void {

  // Is the first block, so don't add margin
  if (!previousBlock) return

  // If the previous block has the same background, render using padding so
  // the background is un-interupted between the blocks
  switch (block.blockSpacing) {
    case BlockSpacing.Small:
      return hasBackground(block) &&
        sameBackground(block, previousBlock) ? 'pt-sm' : 'mt-sm'
    case BlockSpacing.Medium:
    case undefined:
      return hasBackground(block) &&
        sameBackground(block, previousBlock) ? 'pt-md' : 'mt-md'
    case BlockSpacing.Large:
      return hasBackground(block) &&
        sameBackground(block, previousBlock) ? 'pt-lg' : 'mt-lg'
  }
}


// Adds padding above a block, like when there is a background color
function mapPaddingTopToTailwindClass(
  block: Block,
  previousBlock: Block,
): string | void {
  if (!('paddingTop' in block)) return
  switch (block.paddingTop) {

    // Explict sizes
    case BlockPadding.Small: return 'pt-sm'
    case BlockPadding.Medium: return 'pt-md'
    case BlockPadding.Large: return 'pt-lg'

    // Add padding top if  this block has a non-empty background and
    // has a different background than the previous block
    case BlockPadding.Matching:
      if (!hasBackground(block) ||
        sameBackground(block, previousBlock)) return
      switch (block.blockSpacing) {
        case BlockSpacing.Small: return 'pt-sm'
        case BlockSpacing.Medium: return 'pt-md'
        case BlockSpacing.Large:
        case undefined: return 'pt-lg'
      }
  }
}

// Adds padding below a block, like when there is a background color
function mapPaddingBottomToTailwindClass(
  block: Block,
  nextBlock: Block,
): string | void {
  if (!('paddingBottom' in block)) return
  switch (block.paddingBottom) {

    // Explict sizes
    case BlockPadding.Small: return 'pb-sm'
    case BlockPadding.Medium: return 'pb-md'
    case BlockPadding.Large: return 'pb-lg'

    // Add padding bottom if this block has a non-empty background and
    // has a different background than the next block
    case BlockPadding.Matching:
      if (!hasBackground(block) ||
        sameBackground(block, nextBlock)) return
      switch (block.blockSpacing) {
        case BlockSpacing.Small: return 'pb-sm'
        case BlockSpacing.Medium: return 'pb-md'
        case BlockSpacing.Large:
        case undefined: return 'pb-lg'
      }
  }
}

// Helper to determine if a background was set on a block
function hasBackground(block: Block): Boolean {
  return block && 'backgroundColor' in block && !!block.backgroundColor
}

// Get the background of a block in Typescript friendly way
function getBackground(block: Block): BackgroundColor {
  return hasBackground(block) ?
    (block as BlockBackground).backgroundColor :
    BackgroundColor.None
}

// Compare to blocks to see if they have the same background settings
function sameBackground(block1: Block, block2: Block): Boolean {
  return getBackground(block1) == getBackground(block2)
}
