const ENABLE_REALTIME_PREVIEW = true
export default function ({ query, enablePreview }) {
  if (query.preview && enablePreview) {
    enablePreview({
      isRealtime: ENABLE_REALTIME_PREVIEW,
    })
  }
}
