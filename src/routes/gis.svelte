<script>
	import { Styles } from 'sveltestrap';
	import { Button, Container, Row, Col } from 'sveltestrap';
import Region from './backend/region.svelte';
</script>

<svelte:head>
	<title>GIS</title>
	<meta name="description" content="GIS - Geographical Information System" />
</svelte:head>
<Styles />

<div class="content">
	<h1>GIS - View historical data and visualize layers</h1>
</div>
<Container>
	<Row>
		<Col>
			<Button>Click me!</Button>
		</Col>
		<Col>This will contain the map</Col>
		<Col>
			<Region/>
		</Col>
	</Row>
</Container>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
