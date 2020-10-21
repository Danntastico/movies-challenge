from flask import Flask,jsonify,request
import pandas as pd

app = Flask(__name__)
df=pd.read_csv('data/movies_final.csv')

@app.route('/', methods=['GET','POST'])
def index():
    if(request.method == 'POST'):
        some_json = request.get_json()
        return jsonify({"you sent":some_json})
    else:
        return jsonify({"about":"Hello world" } )

#not sorted
@app.route('/movies/all', methods=['GET'])
def get_all():
    all_movies = df[['movieId','imdbId','tmdbId','title','genres','rating','tag']]
    return (all_movies.to_json(orient = "records"))

@app.route('/movies/<int:id>', methods=['GET'])
def get_movieinfo(id):
    movie = df.loc[df['movieId'] == id]
    movie = movie[['movieId','imdbId','tmdbId','title','genres','rating','tag']]
    return (movie.to_json(orient = "records"))

#sorted by rating
@app.route('/movies/top_100', methods=['GET'])
def get_top_100():
    top = df.sort_values(by=['rating'],ascending=False)
    top = top[['movieId','imdbId','tmdbId','title','genres','rating','tag']]
    top = top.head(100)
    return (top.to_json(orient = "records"))

#sorted by rating
@app.route('/movies/<genre>', methods=['GET'])
def filterby_genre(genre):
    df_bygenre = df.loc[df[genre] == 1]
    df_bygenre = df_bygenre.sort_values(by=['rating'],ascending=False)
    for row in df_bygenre:
        df_filtered = df_bygenre[['movieId','imdbId','tmdbId','title','genres','rating','tag','year']]
    return (df_filtered.to_json(orient = "records"))       

@app.route('/movies/sorted/title', methods=['GET'])
def sortby_title():
    title_sorted = df.sort_values(by=['title'])
    title_sorted = title_sorted[['movieId','imdbId','tmdbId','title','genres','rating','tag','year']]
    return (title_sorted.to_json(orient = "records"))    

@app.route('/search/<text>', methods=['GET'])
def search(text):
    df2 = df
    df2['title'] = df2['title'].str.lower()
    text = text.lower()
    df2['results']= df2['title'].str.contains(text)
    return (df2[df2['results']==True][['movieId','imdbId','tmdbId','title','genres','rating','tag','year']].to_json(orient = "records"))    


if __name__ == "__main__":
    app.run(debug=True)