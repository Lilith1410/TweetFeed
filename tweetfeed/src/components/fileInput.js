const ImportFromFileBodyComponent = () => {
  let fileReader;

  const handleFileRead = (e) => {
    const content = fileReader.result;
    console.log(content);
  };

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onload = handleFileRead;
    fileReader.readAsText(file);
  };

  return <div className='upload-expense'>
    <input type='file'
            id='file'
            className='input-file'
            accept='.txt'
            onChange={e => handleFileChosen(e.target.files[0])}
    />
    </div>
}
