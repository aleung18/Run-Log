# streamlit application to display the graphs
# to run streamlit, do "streamlit run app.py"

# 9/3/24 notes: got Streamlit to work via vscode, followed this website to set up a conda environment for it:
# https://discuss.streamlit.io/t/import-error-streamlit-hello/35076/4

# had an error with it in VS Code though, was able to figure it out with this website:
# https://code.visualstudio.com/docs/python/environments

# basically had to just change the environment in vscode

import streamlit as st

st.write("""
# My first app
Hello *world!*
""")