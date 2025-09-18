
import request from "supertest";
import app from "../server"; 

describe("Image API", () => {
  it("should return 400 if no filename provided", async () => {
    const res = await request(app).get("/images");
    expect(res.status).toBe(400);
    expect(res.text).toBe("Filename is required");
  });
  //  it('should throw error if filename is missing', async () => {
  //       const res = await request(app).get("/images?");

  //   await expect(res)
    
  //     .rejects
      
  //     .toThrow('Missing required parameters. Filename, width, and height are required.');
  // });

  it("should return 404 if file does not exist", async () => {
    const res = await request(app).get("/images?filename=notfound.jpg");
    expect(res.status).toBe(404);
  });
});


describe('Image API Endpoint Tests', () => {

  it('GET /image/:filename returns 200 and image buffer', async () => {
    const res = await request(app)
      .get('/images?filename=t1.webp?width=200&height=200')
      .expect(200);

    expect(res.header['content-type']).toBe('image/png'); 
    expect(res.body).toBeInstanceOf(Buffer);
  });

  it('GET /placeholder/:width/:height returns 200 and image', async () => {
    const res = await request(app)
      .get('/placeholder/300/200')
      .expect(200);

    expect(res.header['content-type']).toBe('image/png');
    expect(res.body).toBeInstanceOf(Buffer);
  });

  it('GET /images with missing parameters returns 400', async () => {
    const res = await request(app)
      .get('/images?filename=t1.webp?width=200')
      .expect(400);

    expect(res.body).toHaveProperty('error');
    expect(res.body.error).toMatch(/Missing required parameters/);
  });

  it('GET /image with invalid dimensions returns 400', async () => {
    const res = await request(app)
      .get('/images?filename=t1.webp?width=-200&height=100')
      .expect(400);

    expect(res.body).toHaveProperty('error');
    expect(res.body.error).toMatch(/Invalid dimensions/);
  });


});


