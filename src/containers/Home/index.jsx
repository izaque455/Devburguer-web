import { CategoryCarousel } from '../../components/CategoryCarousel/index.jsx';
import { OfferCarousel } from '../../components/OffersCarousel/index.jsx';
import { Banner, Container, Content } from './styled';

export function Home() {
	return (
		<main>
			<Banner>
				<h1>Bem-Vindo!</h1>
			</Banner>
			<Container>
				<Content>
					<CategoryCarousel />
					<OfferCarousel />
				</Content>
			</Container>
		</main>
	);
}
