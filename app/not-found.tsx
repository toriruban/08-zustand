import Link from 'next/link';
import css from './not-found.module.css'

const NotFound = () => {
    return (
        <div className={css.container}>
          <h1 className={css.title}>404 - Page not found</h1>
          <p className={css.description}>Sorry, the page you are looking for does not exist.</p>  
          <Link href='/'>Go back home</Link>
        </div>
    )
}
export default NotFound;