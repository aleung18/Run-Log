import streamlit as st
import plotly.express as px
import pandas as pd
import matplotlib.pyplot as plt
from datetime import date

today = date.today()

st.title("Ashton's Run-Log")
st.write("Data collected from Strava, hoping to use stats to improve running/potentially create structured workout plans!")

# You can even add interactive widgets:
# name = st.text_input("Enter your name:")
# if name:
#     st.success(f"Welcome, {name}!")
    
st.subheader(f"Strava Data as of {today}")
    
df = pd.read_csv("../run-log-data/data/my_activity_data=20260127202937.csv")
st.write(df.head())

# messing around with/learning some of streamlits graphs

fig = px.line(
    df,
    x="start_date",
    y="distance",
    title="Distance over time"
)

st.plotly_chart(fig, use_container_width=True)

st.subheader("Total Distance by Activity Type")
grouped = df.groupby("type")["distance"].sum()

st.bar_chart(grouped, x_label="Activity", y_label="Distance in Meters")

# Pie Chart of Activities based on Time Spent
# streamlit does NOT have a native pie-chart module, need to use matplotlib to create

st.subheader("Time Spent for each Activity") 

# converting moving time from seconds to minutes  
df["moving_time_min"] = df["moving_time"] / 60

# grouping each activity by total time spent doing it
time_by_activity = (
    df.groupby("type")["moving_time_min"]
    .sum()
)

# actual pie chart
fig, ax = plt.subplots()

ax.pie(
    time_by_activity,
    labels=time_by_activity.index,
    autopct="%1.1f%%",
    startangle=90
)

ax.set_title("Activity Breakdown by Time Spent")
ax.axis("equal")  # makes the pie circular

# displaying
st.pyplot(fig)