from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
   return render_template('index.html')


def main():
    port = int(os.environ.get('PORT', 33507))
    app.run(debug=True, host='0.0.0.0', port=port)

if __name__ == "__main__":
    main()
