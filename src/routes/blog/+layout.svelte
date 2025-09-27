<script lang="ts">
	let { children } = $props();
</script>

<div class="mx-auto px-4 sm:px-6 lg:px-8 py-12" style="max-width: 1100px;">
	{@render children?.()}
</div>
