import { useForm } from 'react-hook-form';
import '../App.css'
function CPUreqform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="mt-4 req-form">
        <div className="row">
          <div className="col-11 col-sm-8 col-md-6 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="location">From location</label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  id="location"
                  placeholder="Enter your pick-up location"
                  autoComplete="off"
                  {...register("location")}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="telNo">Mobile Number</label>
                <input
                  type="tel"
                  className="form-control"
                  name="telNo"
                  id="telNo"
                  placeholder="Enter Mobile Number"
                  {...register("telNo")}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="capacity">Capacity(in quintal)</label>
                <br />
                <input
                  type="number"
                  className="form-control"
                  name="capacity"
                  id="capacity"
                  placeholder="Enter number of quintals"
                  autoComplete="off"
                  style={{ width: '300px', height: '30px' }}
                  {...register("capacity")}
                />
              </div>
              {/* image upload or any file upload */}
              <div className="mb-3">
                <label htmlFor="pic">Profile Pic</label>
                <input
                  type="file"
                  className="form-control"
                  name="pic"
                  {...register("pic")}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CPUreqform;
