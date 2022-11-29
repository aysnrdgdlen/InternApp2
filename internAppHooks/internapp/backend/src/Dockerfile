FROM python:3.8
EXPOSE 5000
ADD . /backend
WORKDIR /backend/src/
RUN python -m pip install flask
CMD ["python", "/backend/app.py"]