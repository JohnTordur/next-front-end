<script>
	import { each, loop_guard } from 'svelte/internal';

	// Import bootstrap stylings:
	import { Container, Styles, Col, Row } from 'sveltestrap';
	const regions = [
		{ title: 'kolding', sensors: ['havn', 'hafnia'] },
		{ title: 'fyrrebakken2', sensors: ['baghave', 'kontor'] },
		{ title: 'test-areal', sensors: ['none'] }
	];
	let active_region_idx = 0;
	let sensors = ['dummy'];
    let active_sensor=0;
</script>

<Styles />

<Container>
	<Row>
		<Col>
			<select
            class="form-select"
				bind:value={active_region_idx}
				on:change={() => {
					sensors = regions[active_region_idx].sensors;
				}}
			>
				{#each regions as region, i}
					<option value={i}>{region.title}</option>
				{/each}
			</select>
		</Col>
		<Col>
			<select
            class="form-select"
            bind:value={active_sensor}>
				{#each sensors as sensor, i}
					<option value={i}>{sensor}</option>
				{/each}
			</select>
		</Col>
        <Col>
            <select
            class="form-select">
                <option>1h</option>
                <option>2h</option>
                <option>5h</option>
            </select>
        </Col>
	</Row>
    <Row>
       <p>Showing data from sensor: {sensors[active_sensor]}</p>
    </Row>
</Container>
