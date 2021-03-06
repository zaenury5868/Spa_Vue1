import React from 'react';
import styled from 'styled-components';

function Footer() {
	return (
		<FooterContainer className="main-footer">
			<div className="footer-middle">
				<div className="container">
					<div className="row">
						{/* kolom 1*/}
						<div className="col-md-3 col-sm-6">
							<h4>City Travel</h4>
							<ul className="list-unstyled">
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Zaenury Dhany Wibowo</li>
								<li>+62 214 515 603</li>
							</ul>
						</div>
						{/* kolom 2*/}
						<div className="col-md-3 col-sm-6">
							<h4>Lorem ipsum</h4>
							<ul className="list-unstyled">
								<li><a href="/">Lorem ipsum</a></li>
								<li><a href="/">Lorem ipsum</a></li>
								<li><a href="/">Lorem ipsum</a></li>
								<li><a href="/">Lorem ipsum</a></li>
							</ul>
						</div>
						{/* kolom 4*/}
						<div className="col-md-3 col-sm-6">
							<h4>Lorem ipsum</h4>
							<ul className="list-unstyled">
								<li><a href="/">Lorem ipsum</a></li>
								<li><a href="/">Lorem ipsum</a></li>
								<li><a href="/">Lorem ipsum</a></li>
								<li><a href="/">Lorem ipsum</a></li>
							</ul>
						</div>
						{/* kolom 4*/}
						<div className="col-md-3 col-sm-6">
							<h4>Lorem ipsum</h4>
							<ul className="list-unstyled">
								<li><a href="/">Lorem ipsum</a></li>
								<li><a href="/">Lorem ipsum</a></li>
								<li><a href="/">Lorem ipsum</a></li>
								<li><a href="/">Lorem ipsum</a></li>
							</ul>
						</div>
					</div>
					{/* footer bawah 1*/}
					<div className="footer-bottom">
						<p className="text-xs-center">
							&copy;{new Date().getFullYear()} City Guide
						</p>
					</div>
				</div>
			</div>
		</FooterContainer>
	);
}

export default Footer;
const FooterContainer = styled.footer`
	.footer-middle {
		background: var(--mainBlue);
		padding-top: 3rem;
		color: var(--mainWhite);
	}
	.footer-bottom {
		padding-top: 3rem;
		padding-bottom: 2rem;
	}
	ul li a {
		color: var(--mainLight);
	}
	ul li a:hover {
		color: var(--mainGrey);
		transition: 0.5s all ease;
	}
`;