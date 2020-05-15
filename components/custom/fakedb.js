const FakeDb = (collection, slice, page) => {
  const start = (page - 1) * slice;
  const end = start + slice;
  const data = collection.slice(start, end);

  return {
    totalData: collection.length,
    dataPerPage: slice,
    currentPage: page,
    data: data,
  };
};

export default FakeDb;
