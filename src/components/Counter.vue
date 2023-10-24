<template>
	<div class="counter">
		<i-button color='danger' @click="store.increment">
			+
		</i-button>
		<div>{{ store.count }}</div>
		<i-button color="dark" @click="store.decrement">-</i-button>
	</div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();
</script>

<style>
.counter {
	display: grid;
	font-size: 2em;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	margin-top: 2em;
	place-items: center;
}

.counter-message {
	text-align: center;
}
</style>
