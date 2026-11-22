<script>
    let {title, image, description} = $props();
</script>

<h2>{title}</h2>
<img src={image} alt={title} style="outline-style:solid; outline-offset: 5px outline-width: 1px">
<p>{description}</p>