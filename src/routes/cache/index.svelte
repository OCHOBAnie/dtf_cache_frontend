<svelte:head>
	<title>Cache Main Page</title>
</svelte:head>

<section>
    <p>
        Cache Main Page
    </p>
    <form id="form" method="get">
        <input type="number" name="post_id" placeholder="Id поста" onchange="document.getElementById('form').action = '/cache/' + this.value;">
        <input type="submit" value="Go">
     </form>
</section>

<style>
    section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>