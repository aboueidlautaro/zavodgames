const [dataSubCoordinadores, setDataSubCoordinadores] = useState([]);

const querySubCoordinadores = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setDataCoordinadores(data.results);
    })
    .catch((error) => {
      setErrorMessage("There is no result for your search.");
    });
};

useEffect(() => {
  querySubCoordinadores(url);
}, [results]);
