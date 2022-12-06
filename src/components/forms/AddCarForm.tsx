export const AddCarForm = () => {
    return (<form className={""}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Brand</span>
                </label>
                <label className="input-group">
                    <span>Brand</span>
                    <input type="text" placeholder="Fiat" className="input input-bordered"/>
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Model</span>
                </label>
                <label className="input-group">
                    <span>Model</span>
                    <input type="text" placeholder="Punto" className="input input-bordered"/>
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Year</span>
                </label>
                <label className="input-group">
                    <span>Email</span>
                    <input type="text" placeholder="info@site.com" className="input input-bordered"/>
                </label>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">License Plate</span>
                </label>
                <label className="input-group">
                    <span>Email</span>
                    <input type="text" placeholder="info@site.com" className="input input-bordered"/>
                </label>
            </div>


            <div className="form-control">
                <label className="label">
                    <span className="label-text">Type</span>
                </label>
                <label className="input-group">
                    <span>Email</span>
                    <select className="select input input-bordered w-full">
                        <option>Diesel</option>
                        <option>Gas</option>
                        <option>Hybrid</option>
                        <option>Eletric</option>
                    </select>
                </label>
            </div>
            <button className="btn btn-outline btn-success">Success</button>

    </form>)
}