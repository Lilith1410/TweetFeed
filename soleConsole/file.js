<input type="file" id="files-input" multiple>
<script>
  var control = document.getElementById("files-input")
  controll.addEventListener("change", function(event) {
    var i = 0,
      files = control.files,
      len = files.length

    for(; i < len i++) {
      console.log("Filename: " + files[i].name)
      console.log("Type: " + files[i].type)
      console.log("Size: " + files[i].size + " bytes")
    }
  }, false)

</script>

var reader = new FileReader()
reader.onload = function(event) {
  var contents = event.target.result
  console.log("File contents: " + contents)
}

reader.onerror = function(event) {
  console.error("File could not be read! Code " + event.target.error.code)
}

reader.readAdText(file)
