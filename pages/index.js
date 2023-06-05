import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function HomePage() {
  return (
    <div className="container my-5">
      <div className="p-5 text-center bg-body-tertiary rounded-3">
        <h1 className="text-body-emphasis">Next Starter</h1>
        <p className="col-lg-8 mx-auto fs-5 text-muted">
          This package saves you from having to deal with repetitive code when
          creating a project with <b>Nextjs</b>.
        </p>
        <div className="d-inline-flex gap-2 mb-5">
          <Link
            href="https://github.com/Frontekip/next-starter.git"
            className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
          >
            Show Next Starter Github
            <FontAwesomeIcon className="bi ms-2" icon={faGithub} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
