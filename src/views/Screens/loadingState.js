import ContentLoader from 'react-content-loader'

export const LoadingState = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={200}
      viewBox="0 0 400 200"
      backgroundColor="#d8cded"
      foregroundColor="#c2b8d5"
      {...props}
    >
      <rect x="50" y="6" rx="4" ry="4" width="343" height="38" />
      <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
      <rect x="50" y="55" rx="4" ry="4" width="343" height="38" />
      <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
      <rect x="50" y="104" rx="4" ry="4" width="343" height="38" />
      <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
      <rect x="50" y="153" rx="4" ry="4" width="343" height="38" />
      <rect x="8" y="153" rx="4" ry="4" width="35" height="38" />
    </ContentLoader>
  )
}