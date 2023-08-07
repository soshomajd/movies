import Header from '@/components/header';
import '../styles/globals.css';
import Footer from '@/components/footer';

const RootLayout = ({children}) => {

    return (
        <html lang="en">
            <body className='flex-col gap-8 my-8' >
             <Header/>
            {children}
            <Footer/>
            </body>
        </html>
    );
}

export default RootLayout;