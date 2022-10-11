declare module '*.less' {
  const classes: { [key: string]: string }
  export default classes
}
declare module '*.jpg' {
  const jpg: string
  export default jpg
}
declare module '*.png' {
  const png: string
  export default png
}
declare interface Window {
  pdk: string
}
