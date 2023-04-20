<script>
    /** @type {import('./$types').PageData} */    
    export let data;
</script>

<img src="{data.bird.image}" alt="a stupid bird" width=400/>
<p>
    {data.bird.fact}
</p>
<p>{data.page}</p>