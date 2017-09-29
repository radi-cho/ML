from sklearn import tree

features = [[140, 1], [130, 1], [150, 0], [170, 0]]
# features: The first value of the 2D array - grams; The second - Bumpy or Smooth
# For example [140, 1], means 140g smooth fruit (0 - bumpy, 1 - smooth)
labels = [0, 0, 1, 1]
# labes: 0 - Apple; 1 - Orange

# Create the classifier
clf = tree.DecisionTreeClassifier()
clf = clf.fit(features, labels)

# Predict the result
result = clf.predict([[160, 0]])
print(result) # [1]
print("The fruit is " + (result[0] == 0 and "Apple" or "Orange") + "!") # Orange

# For more info watch https://youtu.be/cKxRvEZd3Mw
