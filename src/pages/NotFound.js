import { BackLink } from "../components/BackLink";

const NotFound = () => {
    return (
      <main style={{ textAlign: 'center' }}>
        <b style={{ fontSize: 64 }}>404</b>
        <p>Sorry, we couldn't find that page :(</p>
        <BackLink to={'/'}>Go Home</BackLink>
      </main>
    );
}

export default NotFound;