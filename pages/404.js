import AppLayout from "../componentes/AppLayout";
import Image from "next/image";
import { Container } from 'react-bootstrap/Container';

const PageError = () => {
    return (
        <AppLayout>
            <Container className="container-ganga fade-in animated ">
                <div className="bg-error">
                    <div className="img-bg-error">
                        <Image
                          src="/images/error.svg"
                          className="img-error"
                        />
                    </div>
                </div>
            </Container>
            <style jsx>
                {`
                    .bg-error{
                        position: relative;
                        height:100vh;
                        width: auto;
                    }

                    .img-bg-error{
                        background-image: url(../../images/pagina-error.png);
                        width: 100%;
                        background-size: cover;
                        height: 100%;
                        position: relative;
                        background-position: center center;
                    }

                    .img-error{
                        position: absolute;
                        bottom: 0%;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%,-50%);
                        width: 40%;
                    }

                    @media (max-width: 769px) {
                        .img-error{
                            width: 70%;
                        }
                    }
                `}
            </style>
        </AppLayout>

    )
}

export default PageError