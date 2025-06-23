export default function Search() {
  return (
    <div className="flex flex-row gap-10">
      <div className="flex flex-col">
        <h1 className="font-black mb-2">Search</h1>
        <input
          className="bg-gray-700 rounded-2xl p-2"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="font-black mb-2">Genre</h1>
        <select className="bg-gray-700 rounded-2xl p-2.5 pr-10">
          <option value="">Any</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Thriller">Thriller</option>
          <option value="Western">Western</option>
        </select>
      </div>
      <div>
        <h1 className="font-black mb-2">Year</h1>
        <select className="bg-gray-700 rounded-2xl p-2.5 pr-10">
          <option value="">Any</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
          <option value="2007">2007</option>
          <option value="2006">2006</option>
        </select>
      </div>
    </div>
  );
}
