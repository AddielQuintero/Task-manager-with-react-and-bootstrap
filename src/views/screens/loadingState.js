import ContentLoader from 'react-content-loader'
import { Container, Row } from 'react-bootstrap'

export const LoadingState = (props) => {
  return (
    <Container className="px-0">
      <Row>
        <ContentLoader
          speed={2}
          width={400}
          height={200}
          viewBox="0 0 400 200"
          backgroundColor="#d8cded"
          foregroundColor="#c2b8d5"
          {...props}
        >
          <rect x="0" y="6" rx="4" ry="4" width="35" height="38" />
          <rect x="50" y="6" rx="4" ry="4" width="350" height="38" />
          <rect x="0" y="55" rx="4" ry="4" width="35" height="38" />
          <rect x="50" y="55" rx="4" ry="4" width="350" height="38" />
          <rect x="0" y="104" rx="4" ry="4" width="35" height="38" />
          <rect x="50" y="104" rx="4" ry="4" width="350" height="38" />
          <rect x="0" y="153" rx="4" ry="4" width="35" height="38" />
          <rect x="50" y="153" rx="4" ry="4" width="350" height="38" />
        </ContentLoader>
      </Row>
    </Container>
  )
}
