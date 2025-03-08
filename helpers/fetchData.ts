
 

export async function fetchData({
  url,
  page,
  locale,
}: {
  url: string;
  page?: string;
  locale: string;
}) {
  const pageQuery = page ? `?page=${page || 1}` : "";
 // const baseUrl = "https://gdd-api.secdy.com/api";
 const baseUrl="http://127.0.0.1:8000/api";
  const apiurl = baseUrl + url + "/" + pageQuery;

  const res = await fetch(apiurl, {
cache:"no-store",
    headers: {
      "Accept-Language": locale.toLocaleLowerCase(),

    },
  });
  //console.log(res.json()) ;
  return res.json();
}
