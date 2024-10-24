from fastapi import FastAPI, Form, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()

# Serve static files (CSS, JS, Images)
app.mount("/static", StaticFiles(directory="app/static"), name="static")

# Serve templates (HTML files)
templates = Jinja2Templates(directory="app/templates")

@app.get("/")
async def homepage(request: Request):
    """
    Renders the homepage.
    """
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/upload_form")
async def upload_form(request: Request):
    """
    Renders the form to upload tourist site pictures and reviews.
    """
    return templates.TemplateResponse("upload_form.html", {"request": request})

@app.post("/submit_review")
async def submit_review(
    request: Request,
    place_name: str = Form(...),
    review: str = Form(...),
    image_url: str = Form(...)
):
    """
    Handles the tourist site picture and review upload.
    """
    # For simplicity, we're printing it to the console. This is where you'd store the data.
    print(f"Place Name: {place_name}, Review: {review}, Image URL: {image_url}")
    return templates.TemplateResponse("index.html", {"request": request, "message": "Review submitted successfully!"})
